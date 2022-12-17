import { sanityClient } from "../../lib/sanity";


export default async function handleContactForm(req, res) {
  res.status(200).json({name:`api routes welcome${5}`})
  const {formContact}=  JSON.parse(req.body);
  
  const data = await sanityClient
  .patch('bike-123')
  // Ensure that the `reviews` arrays exists before attempting to add items to it
  .setIfMissing({reviews: []})
  // Add the items after the last item in the array (append)
  .insert('after', 'reviews[-1]', [{title: 'Great bike!', stars: 5}])
  .commit({
    // Adds a `_key` attribute to array items, unique within the array, to
    // ensure it can be addressed uniquely in a real-time collaboration context
    autoGenerateArrayKeys: true,
  })
  console.log(req)
}
