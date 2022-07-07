
- tsc --init
- copy content of a tsconfig.json file.
        "target": "es2018",
        "moduleResolution": "node",
        "rootDir": "./src",
        "outDir": "./dist",

- In a new terminal window
    tsc -w

- npm install --save-dev nodemon
- npm install --save-dev jest
- npm install --save-dev @types/jest
- npm install --save-dev ts-jest


- package.json
        "start": "nodemon dist/app.js"

- copy jest.config.js

- public getComponent<C extends IComponent>(constr: {new(...args: any[]): C}): C {
    Then, we define one argument constr which must be of a type of this weird thing:
        { new(...args: any[]): C }
    This way we let TypeScript know we want constructor (note the keyword new ) that can have any amount of arguments
    of any type (read: ...args: any[] ) and which produces an object of type C.

