module.exports = {
    id:1,
    module: 'Пальма',
    collapsed: false,
    attr: [{color: "black"}, {name: 'Tree'}],
    children: [
        {
            id:2,
            module: 'Ветка 1',
            collapsed: true,
            attr: [{name: 'childTree'}],
            children: [
                {
                    id:3,
                    module: 'Лист 1.1',
                    collapsed: false,
                    leaf: true
                },
                {
                    id:4,
                    module: 'Лист 1.2',
                    collapsed: false,
                    leaf: true
                },
                {
                    id:5,
                    module: 'Лист 1.3',
                    collapsed: false,
                    leaf: true
                },
                {
                    id:6,
                    module: 'Лист 1.4',
                    collapsed: false,
                    leaf: true
                }
            ]
        },
        {
            id:7,
            module: 'Ветка 2',
            collapsed: false,
            children: [
                {
                    id:8,
                    module: 'Лист 2.1',
                    leaf: true
                },
                {
                    id:9,
                    module: 'Лист 2.2',
                    leaf: true
                },
                {
                    id:10,
                    module: 'Лист 2.3',
                    leaf: true
                }
            ]
        },
        {
            id:11,
            module: 'Ветка 3',
            collapsed: false,
            children: [
                {
                    id:12,
                    module: 'Лист 3.1',
                    leaf: true
                },
                {
                    id:13,
                    module: 'Лист 3.2',
                    leaf: true
                },
                {
                    id:14,
                    module: 'Лист 3.3',
                    leaf: true
                },
                {
                    id:15,
                    module: 'Лист 3.4',
                    leaf: true,
                    collapsed: true,
                    children: [
                        {
                            id:16,
                            module: 'Лист 3.4.1',
                            leaf: true
                        },
                        {
                            id:17,
                            module: 'Лист 3.4.2',
                            leaf: true
                        },
                    ]
                }
            ]
        }
    ]
};
