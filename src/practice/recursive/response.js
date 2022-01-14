// Arbitrarily nested data
const folders = [
    {
      name: "Pepperoni",
      id: "pepperoni-id",
      subOptions: [
        {
          name: "Spicy",
          id: "spicy-id",
          subOptions: []
        },
        {
          name: "Regular",
          id: "regular-id",
          subOptions: []
        }
      ]
    },
    {
      name: "Chicken",
      id: "chicken-id",
      subOptions: [
        {
          name: "Buffalo",
          id: "buffalo-id",
          subOptions: [
            {
              name: "Mild",
              id: 'mild-id',
              subOptions: [],
            },
            {
              name: "Hot",
              id: 'hot-id',
              subOptions: [
                {
                  name: 'Jalapeno',
                  id: 'jalapeno-id',
                  subOptions: []
                },
                {
                  name: 'Cayenne',
                  id: 'cayenne-id',
                  subOptions: []
                }
              ],
            },
          ]
        },
        {
          name: "BBQ",
          id: 'bbq-id',
          subOptions: [],
        }
      ]
    },
  ]

export default folders;
