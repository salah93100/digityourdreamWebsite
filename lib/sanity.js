import { createClient,
    createPreviewSubscriptionHook,
    createPortableTextCompoment
} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'


const config= {
    dataset:  "production",
    projectId : "teakcgdg",
    apiVersion: '2021-10-21',
    token:'skJGL5SM6O89Z0S4xrSRTsel8lSvbmO2GxtvTyLRhYbqE4DUWMBrMuupgidPUDo0prkbjKQZa6wiUzK7gJ8oE4Jth9l8wlNSIiOM0urQzwlkTuWlDKXUPGfZBGVb8P9Z3LLBz3gddoiJJtg2Hoimk2qSv1Kpuxs2tW06zcVGCTITk8rdePOD',
    useCdn: true,
}

export const sanityClient = createClient(config);


export const usePreviewSubscriptionHook= createPreviewSubscriptionHook(config);


export const UrlFor = (source) => createImageUrlBuilder(config).image(source);

