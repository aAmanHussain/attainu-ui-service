export enum SortOrder {
    asc,
    desc
}

export const SortConfig = [
    {
        label: 'None',
        value: ''
    },
    {
        label: 'Price: Low to High',
        value: {
            order: SortOrder.asc,
            field: 'price'
        }
    },
    {
        label: 'Price: High to Low',
        value: {
            order: SortOrder.desc,
            field: 'price'
        }
    }
];