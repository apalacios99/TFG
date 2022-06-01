// LIBRERIRIAS NECESARIAS
#include <M5Stack.h>

#include <stdio.h>
#include <sys/time.h>
#include <time.h>
#include <math.h>
#include "universal-mqtt.h"
#include <WiFiUdp.h>

// Define NTP Client to get time
String formattedDate;

void setup() {
  M5.begin();
  M5.Power.begin();

  while(analogRead(35) < 400){
    M5.Lcd.fillScreen(TFT_BLACK);
    M5.Lcd.setTextSize(3);
    M5.Lcd.setTextColor(TFT_GREEN, TFT_BLACK);
    M5.Lcd.setCursor(0,0);
    M5.Lcd.println("  Univ. Europea");
    M5.Lcd.setCursor(0,80);
    M5.Lcd.print("No se puede iniciar el sensor.");
    
    M5.Lcd.setTextSize(2);
    M5.Lcd.setCursor(0,200);
    M5.Lcd.print("  Bateria: ");
    M5.Lcd.print(getBatteryLevel());
    M5.Lcd.print(" %");
  }


  M5.Lcd.fillScreen(TFT_BLACK);
  M5.Lcd.setTextSize(3);
  M5.Lcd.setTextColor(TFT_GREEN, TFT_BLACK);
  M5.Lcd.setCursor(0,0);
  M5.Lcd.println("  Univ. Europea");
  M5.Lcd.setCursor(0,80);
  M5.Lcd.print("Sensor iniciado.");
  
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(0,200);
  M5.Lcd.print("  Bateria: ");
  M5.Lcd.print(getBatteryLevel());
  M5.Lcd.print(" %");
  
  pinMode(LED_BUILTIN, OUTPUT);
  setupCloudIoT();
}

unsigned long lastMillis = 0;
void loop() {
  mqtt->loop();
  delay(10);  // <- fixes some issues with WiFi stability

  if (!mqttClient->connected()) {
    connect();
  } 

  // publish a message roughly every second.
  if (millis() - lastMillis > 1000) {
     if(analogRead(35) > 400){
        getFormatedDate();
        String json = "{\"fechaHora\":\"" + formattedDate + "\",\"eco2\":" + analogRead(35) + "}";
        publishTelemetry(json);

        // Imprimir en M5Stack
        M5.Lcd.fillScreen(TFT_BLACK);
        M5.Lcd.setTextSize(3);
        M5.Lcd.setTextColor(TFT_GREEN, TFT_BLACK);
        M5.Lcd.setCursor(0,0);
        M5.Lcd.println("  Univ. Europea");
        M5.Lcd.setCursor(0,80);
        M5.Lcd.print("Eco2: ");
        M5.Lcd.print(analogRead(35)); // El 0 elimina los decimales
        M5.Lcd.println();
        M5.Lcd.print("");
        M5.Lcd.setTextSize(2);
        M5.Lcd.setCursor(0,200);
        M5.Lcd.print("     Bateria: ");
        M5.Lcd.print(getBatteryLevel());
        M5.Lcd.print(" %");
    } else {
          // Imprimir en M5Stack
          M5.Lcd.fillScreen(TFT_BLACK);
          M5.Lcd.setTextSize(3);
          M5.Lcd.setTextColor(TFT_GREEN, TFT_BLACK);
          M5.Lcd.setCursor(0,0);
          M5.Lcd.println("  Univ. Europea");
          M5.Lcd.setCursor(0,80);
          M5.Lcd.print("Sensor no disponible");
      
          M5.Lcd.setTextSize(2);
          M5.Lcd.setCursor(0,200);
          M5.Lcd.print("  Bateria: ");
          M5.Lcd.print(getBatteryLevel());
          M5.Lcd.print(" %");
    }
    
    lastMillis = millis();
  }
}


static void getFormatedDate()
{
  char buffer[26];
  int millisec;
  struct tm* tm_info;
  struct timeval tv;

  gettimeofday(&tv, NULL);
  setenv("TZ", "CET-1CEST,M3.5.0/2,M10.5.0/ 3", 1);
  tzset();

  millisec = lrint(tv.tv_usec/1000.0); // Round to nearest millisec
  if (millisec>=1000) { // Allow for rounding up to nearest second
    millisec -=1000;
    tv.tv_sec++;
  }

  tm_info = localtime(&tv.tv_sec);

  strftime(buffer, 26, "%Y-%m-%dT%H:%M:%S", tm_info);
  sprintf(buffer, "%s.%03d", buffer, millisec);

  formattedDate = String(buffer);
}

int8_t getBatteryLevel()
{
  Wire.beginTransmission(0x75);
  Wire.write(0x78);
  if (Wire.endTransmission(false) == 0
   && Wire.requestFrom(0x75, 1)) {
    switch (Wire.read() & 0xF0) {
    case 0xE0: return 25;
    case 0xC0: return 50;
    case 0x80: return 75;
    case 0x00: return 100;
    default: return 0;
    }
  }
  return -1;
}

void messageReceived(String &topic, String &payload) {
  Serial.println("incoming: " + topic + " - " + payload);
}
