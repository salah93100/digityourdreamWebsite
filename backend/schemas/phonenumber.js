export default{
    name: 'phonenumber',
    type:'document',
    title:'Number of phone',
    fields: [
        {
            name:'numberphone',
            type:'array',
            title:'number of Tel:',
            of:[{type: 'string'}],
        }
    ]
}