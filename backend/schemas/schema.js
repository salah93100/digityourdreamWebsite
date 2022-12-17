// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import contactform from './contactform';
import project from './project'
import aboutpage from './aboutpage'
import services from './services'
import home from './home'
import testimonial from './testimonial'
import section from './section';
import phonenumber from './phonenumber';


export default createSchema({
  // We name our schema
  name: 'default',
 
  types: schemaTypes.concat([
   project,
   aboutpage,
   services,
   home,
   testimonial,
   section,
   phonenumber,
   contactform,
  ]),
})
