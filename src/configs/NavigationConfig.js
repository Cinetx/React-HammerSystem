import {
    DashboardOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
    PictureOutlined,
    GiftOutlined,
    ShopOutlined,
    UsergroupAddOutlined,
    MailOutlined,
    SettingOutlined,
    MobileOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'


const mainNavTree = [{
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'sidenav.main',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
        {
            key: 'main-dashboard',
            path: `${APP_PREFIX_PATH}/main/dashboard`,
            title: 'sidenav.main.dashboard',
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-catalog',
            path: `${APP_PREFIX_PATH}/main/catalog`,
            title: 'sidenav.main.catalog',
            icon: ShoppingCartOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'main-catalog-products',
                    path: `${APP_PREFIX_PATH}/main/catalog/products`,
                    title: 'sidenav.main.catalog.products',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalog-categories',
                    path: `${APP_PREFIX_PATH}/main/catalog/categories`,
                    title: 'sidenav.main.catalog.categories',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalog-collections',
                    path: `${APP_PREFIX_PATH}/main/catalog/collections`,
                    title: 'sidenav.main.catalog.collections',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalog-combo',
                    path: `${APP_PREFIX_PATH}/main/catalog/combo`,
                    title: 'sidenav.main.catalog.combo',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },

            ]
        },
        {
            key: 'main-orders',
            path: `${APP_PREFIX_PATH}/main/orders`,
            title: 'sidenav.main.orders',
            icon: ShoppingOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-clients',
            path: `${APP_PREFIX_PATH}/main/clients`,
            title: 'sidenav.main.clients',
            icon: UserOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'main-clients-list',
                    path: `${APP_PREFIX_PATH}/main/clients/users-list`,
                    title: 'sidenav.main.clients.userslist',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-clients-group',
                    path: `${APP_PREFIX_PATH}/main/clients/group`,
                    title: 'sidenav.main.clients.group',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
            ]
        },
        {
            key: 'main-banners',
            path: `${APP_PREFIX_PATH}/main/banners`,
            title: 'sidenav.main.banners',
            icon: PictureOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-promo-codes',
            path: `${APP_PREFIX_PATH}/main/promo-codes`,
            title: 'sidenav.main.promoCodes',
            icon: GiftOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-offline-points',
            path: `${APP_PREFIX_PATH}/main/offline-points`,
            title: 'sidenav.main.offlinePoints',
            icon: ShopOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'main-offline-points-addresses',
                    path: `${APP_PREFIX_PATH}/main/offline-points/addresses`,
                    title: 'sidenav.main.offlinePoints.addresses',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-offline-points-geofences',
                    path: `${APP_PREFIX_PATH}/main/offline-points/geofences`,
                    title: 'sidenav.main.offlinePoints.geofences',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
            ]
        },
        {
            key: 'main-staff',
            path: `${APP_PREFIX_PATH}/main/staff`,
            title: 'sidenav.main.staff',
            icon: UsergroupAddOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-newsletters',
            path: `${APP_PREFIX_PATH}/main/newsletters`,
            title: 'sidenav.main.newsletters',
            icon: MailOutlined,
            breadcrumb: false,
            submenu: []
        },
    ]
}]

const systemicNavTree = [
    {
        key: 'systemic',
        path: `${APP_PREFIX_PATH}/systemic`,
        title: 'sidenav.systemic',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [
            {
                key: 'systemic-settings',
                path: `${APP_PREFIX_PATH}/main/settings`,
                title: 'sidenav.systemic.settings',
                icon: SettingOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'systemic-mobile-app',
                path: `${APP_PREFIX_PATH}/main/mobile-app`,
                title: 'sidenav.systemic.mobileApp',
                icon: MobileOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'systemic-logs',
                path: `${APP_PREFIX_PATH}/main/logs`,
                title: 'sidenav.systemic.logs',
                icon: FileTextOutlined,
                breadcrumb: false,
                submenu: []
            },

        ]
    }]


const navigationConfig = [
    ...mainNavTree,
    ...systemicNavTree

]

export default navigationConfig;
