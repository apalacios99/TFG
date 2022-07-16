# Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Crear una nueva KEYSTORE
1. Ejecutar `keytool -genkey -v -keystore TfgAlejandraPalacios.keystore -alias tfgAlejandraPalacios -keyalg RSA -keysize 2048 -validity 10000`.
2. Ejecutar para convertirla en pkcs12 `keytool -importkeystore -srckeystore TfgAlejandraPalacios.keystore -destkeystore TfgAlejandraPalacios.keystore -deststoretype pkcs12`.

# Generar APP BUNDLE MOVIL PARA ANDROID
1. Ejecutar `npm run build`.
2. Ejecutar `cordova run android` para comprobar que la aplicación se ejecuta correctamente.
3. Abrir Android Studio y abrir la carpeta android ubicada dentro de plataforms.
4. En el menu superior pulsar en Build -> Clean Project.
5. En el menu superior pulsar en Build -> Generate Signed Bundle / APK...
6. Seleccionar la ubicación de la clave firmada.
   UBICACIÓN: .\FrontRemesas.keystore
   CONSTRASEÑA: Alejandra
   ALIAS: tfgAlejandraPalacios
   KEY PASSWORD: Alejandra
7. Pulsar a publicar en release y en app/release encontraremos la aplicación con el nombre `app-release.abb`.
