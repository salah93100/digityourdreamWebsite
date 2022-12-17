export default{
    name: 'contactform',
    type:'document',
    title:'Prospecttt',
    fields: [
        {
            name:'contact',
            type:'object',
            title:'formulaire de contact',
            fields: [ // fields must be defined, and it must be an array
            {
              name: 'project', // field name is required and must be unique
              type: 'string' // field type is required
            },
            // ... 
            {
              name: 'email', // 💥 ERROR a field named "myField" is already defined on this object
              type: 'string'
            },
            {
                name: 'name', 
                type: 'string'
              },
              {
                name: 'nameSocial', 
                type: 'string'
              },
                
            

          ]
        
        }
    ]
}