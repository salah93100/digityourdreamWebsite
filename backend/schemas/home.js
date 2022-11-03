export default{
    name: 'homepage',
    type:'document',
    title:'Home page',
    fields:[
        {
            name:'photohero',
            type:'image',
            title:'PhotoHeroSection'
        },
        {
            name:'titlehero',
            type:'string',
            title:'TitleheroSection'
        },
        
        {
            name:'texthero',
            type:'text',
            title:'TextofHeroSection'
        },
        {
            name:'arrayCaroussel',
            type:'array',
            title:'Array carroussel',
            of: [{ type:"image"}] ,
        },
        {
            name:'TestimonialCaroussel',
            type:'array',
            title:'Temoignage carroussel',
            of: [
                {
                  type: "reference",
                  to: [{ type: "testimonial" }],
                },
              ],
        },
        {
            name:'section',
            type:'array',
            title:'section image + text',
            of: [
                {
                  type: "reference",
                  to: [{ type: "section" }],
                },
              ],
        }


    ]
}