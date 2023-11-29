const withName = (Component, name) => {
    const ComponentWithName = (props) => {
        return <Component {...props} name={name}/>
    }

    return ComponentWithName;
}


const Person = (props) => {
    return <div>{props.name}</div>
}

const PersonPavel = withName(Person,'Pavel');
const PersonRoma = withName(Person,'Roma');
const PersonDima = withName(Person, 'Dima');



const PersonPavel = withName(Person,'Pavel');

<PersonPavel yaProps={'яПропс'}/>

const PersonPavel = (props) => {
    return <Person {...props} name={name}/>
}



//!     HOC - это функция, которая привызове возвращает Контейнерную компоненту, которая возвращает компоненту
//!     которая приходит в качестве аргумента при вызове HOC функции





    // HOC - это функция, которая при вызове возвращает контейнерную компоненту, которая в свою очередь возвращает компоненту,
    // которая приходит в качестве аргумента при вызове HOC функции.
    //
    // Это означает, что HOC создает компоненту-обертку,
    // которая может добавлять дополнительную функциональность или пропсы к переданной ей компоненте.
    // Таким образом, HOC позволяет переиспользовать логику между компонентами.



