# Site Obras Publicas Create React App

## Available Scripts
___

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3005](http://localhost:3005) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## API
___

The application's Api is in Heroku, created with Strapi and using GraphQL.

Consuming the api can be slow, since the free Heroku account is used.

API data is stored in a database in MongoDB Atlas

## Queries
___
### Query Cordinacion

```
query getCordinacion{
  ctCoordinacionRegionals{
    id
    name
  }
}
```
### Query reportes

```
query getReportes {
  reportes {
    id
    descripcion
    fecha_inicio
    fecha_fin
    porcentaje_avance
    Activo
  }
}
```
### Query reportes - conection

```
query getrepostesConection{
  reportesConnection{
    values{
      id
      descripcion
      fecha_inicio
      fecha_fin
      porcentaje_avance
      ct_tramo_carretero{
        nombre
      }
      ct_coordinacion_regional{
        name
      }
    }
  }
}

query getrepostesConection{
  reportesConnection(where:{Activo:true}){
    values{
      id
      descripcion
      fecha_inicio
      fecha_fin
      porcentaje_avance
      Activo
      ct_tramo_carretero{
        nombre
      }
      ct_coordinacion_regional{
        name
      }
    }
  }
}
```
### Query reportes - cordination

```
query getReportCoordination($name: String!) {
  ctCoordinacionRegionals(where: { name: $name }) {
    id
    name
    reportes {
      id
      descripcion
      fecha_inicio
      fecha_fin
      porcentaje_avance
      ct_tramo_carretero {
        nombre
      }
    }
  }
}
```

## Technologies used
___

- React JS
- [Ant Design](https://ant.design/)
- GraphQL
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Nivo](https://nivo.rocks/)
- [Viser](https://viserjs.gitee.io/)
- [Styled Components](https://styled-components.com/)
- Eslint
- Prettier
- [Standart](https://standardjs.com/)
- Husky