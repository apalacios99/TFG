// Cloud iot details.
const char* project_id = "sage-archway-348308";
const char* location = "europe-west1";
const char* registry_id = "sensores";
const char* device_id = "CO2";

const char* private_key_str = 
    "ff:78:50:aa:83:c6:b1:74:e1:68:8f:24:f2:d0:5a:"
    "43:f3:30:1f:d6:77:d5:66:8e:6e:c2:74:6c:8b:af:"
    "7a:35";

// Wifi network details.
const char* ssid = "iPhone de Alejandra";
const char* password = "11111111";

// Configuration for NTP
const char* ntp_primary = "pool.ntp.org";
const char* ntp_secondary = "time.nist.gov";

#ifndef LED_BUILTIN
#define LED_BUILTIN 13
#endif

const int jwt_exp_secs = 3600;
const char *root_cert = "-----BEGIN CERTIFICATE-----\n"
                        "MIIErjCCA5agAwIBAgIQW+5sTJWKajts11BgHkBRwjANBgkqhkiG9w0BAQsFADBU\n"
                        "MQswCQYDVQQGEwJVUzEeMBwGA1UEChMVR29vZ2xlIFRydXN0IFNlcnZpY2VzMSUw\n"
                        "IwYDVQQDExxHb29nbGUgSW50ZXJuZXQgQXV0aG9yaXR5IEczMB4XDTE5MDYxMTEy\n"
                        "MzE1OVoXDTE5MDkwMzEyMjAwMFowbTELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNh\n"
                        "bGlmb3JuaWExFjAUBgNVBAcMDU1vdW50YWluIFZpZXcxEzARBgNVBAoMCkdvb2ds\n"
                        "ZSBMTEMxHDAaBgNVBAMME21xdHQuZ29vZ2xlYXBpcy5jb20wggEiMA0GCSqGSIb3\n"
                        "DQEBAQUAA4IBDwAwggEKAoIBAQDHuQUoDZWl2155WvaQ9AmhTRNC+mHassokdQK7\n"
                        "NxkZVZfrS8EhRkZop6SJGHdvozBP3Ko3g1MgGIZFzqb5fRohkRKB6mteHHi/W7Uo\n"
                        "7d8+wuTTz3llUZ2gHF/hrXFJfztwnaZub/KB+fXwSqWgMyo1EBme4ULV0rQZGFu6\n"
                        "7U38HK+mFRbeJkh1SDOureI2dxkC4ACGiqWfX/vSyzpZkWGRuxK2F5cnBHqRbcKs\n"
                        "OfmYyUuxZjGah+fC5ePgDbAntLUuYNppkdgT8yt/13ae/V7+rRhKOZC4q76HBEaQ\n"
                        "4Wn5UC+ShVaAGuo7BtfoIFSyZi8/DU2eTQcHWewIXU6V5InhAgMBAAGjggFhMIIB\n"
                        "XTATBgNVHSUEDDAKBggrBgEFBQcDATA4BgNVHREEMTAvghNtcXR0Lmdvb2dsZWFw\n"
                        "aXMuY29tghhtcXR0LW10bHMuZ29vZ2xlYXBpcy5jb20waAYIKwYBBQUHAQEEXDBa\n"
                        "MC0GCCsGAQUFBzAChiFodHRwOi8vcGtpLmdvb2cvZ3NyMi9HVFNHSUFHMy5jcnQw\n"
                        "KQYIKwYBBQUHMAGGHWh0dHA6Ly9vY3NwLnBraS5nb29nL0dUU0dJQUczMB0GA1Ud\n"
                        "DgQWBBSKWpFfG/yH1dkkJT05y/ZnRm/M4DAMBgNVHRMBAf8EAjAAMB8GA1UdIwQY\n"
                        "MBaAFHfCuFCaZ3Z2sS3ChtCDoH6mfrpLMCEGA1UdIAQaMBgwDAYKKwYBBAHWeQIF\n"
                        "AzAIBgZngQwBAgIwMQYDVR0fBCowKDAmoCSgIoYgaHR0cDovL2NybC5wa2kuZ29v\n"
                        "Zy9HVFNHSUFHMy5jcmwwDQYJKoZIhvcNAQELBQADggEBAKMoXHxmLI1oKnraV0tL\n"
                        "NzznlVnle4ljS/pqNI8LUM4/5QqD3qGqnI4fBxX1l+WByCitbTiNvL2KRNi9xau5\n"
                        "oqvsuSVkjRQxky2eesjkdrp+rrxTwFhQ6NAbUeZgUV0zfm5XZE76kInbcukwXxAx\n"
                        "lneyQy2git0voUWTK4mipfCU946rcK3+ArcanV7EDSXbRxfjBSRBD6K+XGUhIPHW\n"
                        "brk0v1wzED1RFEHTdzLAecU50Xwic6IniM3B9URfSOmjlBRebg2sEVQavMHbzURg\n"
                        "94aDC+EkNlHh3pOmQ/V89MBiF1xDHbZZ1gB0GszYKPHec9omSwQ5HbIDV3uf3/DQ\n"
                        "his=\n"
                        "-----END CERTIFICATE-----\n";
const int ex_num_topics = 0;
const char* ex_topics[ex_num_topics];
