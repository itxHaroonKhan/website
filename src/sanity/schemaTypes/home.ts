import { defineType } from 'sanity';

export const home = defineType({
    name: 'home',
    type: 'document',
    title: 'Home',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // For better cropping options
        },
      },
    ],
});
