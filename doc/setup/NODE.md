# Setup de NodeJS
Como cualquier lenguaje de programación, plataforma o herramienta; el primer paso para usarla es instalarla. Lo primero que necesitamos para empezar a usar ReactJS es NodeJS, y la forma mas facil de instalar NodeJs y tener varias versiones de NodeJS conviviendo es con NVM.

## Preparemos el ambiente
Como cualquier lenguaje de programación, plataforma o herramienta; el primer paso para usarla es instalarla. Lo primero que necesitamos para empezar a usar ReactJS es NodeJS, y la forma mas facil de instalar NodeJs y tener varias versiones de NodeJS conviviendo es con NVM.

### NVM
NVM es una herramienta que nos permite instalar muy facilmente Nodejs, tener varias versiones instaladas, y poder cambiar facilmente entre una y otra.
En ambientes Unix como macOS y Linux podemos instalar NVM de la siguiente manera:
```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash```
Podemos asegurarnos de que nvm fue instalado correctamente con `nvm --version`, lo que deberia retornar la version de nvm instalada.

### NodeJS
Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. para instalar NodeJS con nvm hay mas de una manera.
Podemos instalar la version de NodeJS que queramos:
- Para instalar la ultima version `nvm install node`
- Para instalar una version especifica `nvm install 10`
- Para usar la mas nueva version instalada `nvm use node`
- Para usar una version en especifico `nvm use 10`
- Para hacer que nuestra version favorita sea la version por defecto `nvm alias default 10`

### Otras dependencias
Es bueno que tengamos un buen compilador de C++, ya que puede que instalemos uno que otro modulo que necesite ser compilado automaticamente una vez instalado. Esto lo hace NodeJS automaticamente pero necesita tener todo instalado.

#### macOS
Abrimos la terminal y ejecutamos `xcode-select --install`, saldra un popup y clickeamos en *Instalar*

#### Linux
Si estamus usando Ubuntu o Debian, los paquetes que hay que instalar son `build-tools` y `libssl-dev`, lo instalamos con:
```
sudo apt-get install build-essential
sudo apt-get install libssl-dev
```
Ya con esto estamo listos para desarrollar lo que queramos con NodeJS.
