export const useMenu = () => {
    const linksStore =  useState('links', () => {
        return [
            {
                label: 'Home',
                to: '/plyr',
                active: 'border-none'
            },
            {
                label: 'Movies',
                to: '/video-js'
            },
            {
                label: 'Series',
                to: '/'
            },
            {
                label: 'Kits',
                to: '/'
            }
        ];
    })

    const makeMenu = (response: any[]) => {
        let links: { label: string; to: string; }[] = [];
        response.forEach((link) => {
            links.push({
                label: link.name,
                to: '/category/'+link.slug
            },)
        })

        return links;
    }


    return {
        linksStore,
        makeMenu
    }
}