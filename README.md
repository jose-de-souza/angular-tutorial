# Angular Tutorial

```Angular CLI version = 17.3.4```

## Build and run

### Run Development
```npm run start```

### Run Staging
```npm run start:staging```

### Build Production
```npm run build --omit=dev```

### Environments
Source: https://alifrazansaputra.medium.com/working-with-environments-the-stages-of-development-angular-17-54f104990025

### Issues

From angular 17 on the default is standalone so the app.module is not generated
when creating a new Angular app. In order to have it created
--no--standalone must be specified:
Source: https://www.youtube.com/watch?v=Lkz3rYqck08
Command:

```ng new angular-tutorial --no-standalone```




