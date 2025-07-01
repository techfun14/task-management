const person1 ={
    name: 'Utkarsh Jain'
    ,email:'jainutkarshuj97@gmail.com'
    ,profiles:['twitter','instagram','facbook',],
    printProfile: () => {
       // eslint-disable-next-line no-undef
       person1.profiles.map(
        // eslint-disable-next-line array-callback-return
        (profile) => {
            console.log(profile);
        }
       )   
    }
}

export default function JavaScript(){
    return(
        <div className="javaScript">
            <div>{person1.name}</div>
            <div>{person1.email}</div>
            <div> {person1.profiles}</div>
            <div> {person1.printProfile}</div>
        </div>

    )
}