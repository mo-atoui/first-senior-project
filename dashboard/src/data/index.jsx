
 const Data = [
	{
		id: 1,
		name: 'Dashboard',
		description: 'tetsttt',
		price: 22,
		stock:33,
		category:"computer",
		image:"data:image/jpeg;base64,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"
	},
	{
		id: 2,
		name: 'ashboard',
		description: 'tetssssttt',
		price: 28,
		stock:39,
		category:"phone",
		image:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/0/1/010-02159-14_1726_1.jpg"
	},
	{
		id: 7,
		name: 'ashbssoard',
		description: 'tetsssxsssttt',
		price: 8,
		stock:9,
		category:"tshirt",
		image:"https://www.exist.com.tn/101769-large_default/t-shirt.jpg"
	},
	
]

export default Data