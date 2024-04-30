export const useUtility = () => {
    const isSidebarOpenStore = useState('is_sidebar_open', () => false)

    return {
        isSidebarOpenStore
    }
}