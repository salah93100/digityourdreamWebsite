import { sanityClient } from "../../lib/sanity";

export default async function handlePhoneNumber(req, res) {

    const {phoneNumberData}=  JSON.parse(req.body);
    const data = await sanityClient
    .patch('drafts.af5cae99-52a2-43a1-8b62-b681151ecffc')
    // Ensure that the `reviews` arrays exists before attempting to add items to it
    .setIfMissing({numberphone: ["ddd"]})
    // Add the items after the last item in the array (append)
    .insert('after', 'numberphone[-1]', [phoneNumberData])
    .commit({
      // Adds a `_key` attribute to array items, unique within the array, to
      // ensure it can be addressed uniquely in a real-time collaboration context
      autoGenerateArrayKeys: true,
    })
    .catch((error)=> console.log(error))
    console.log(phoneNumberData)
    res.status(200).json({data})
  }
  