// assets
import { ExpandOutlined } from '@ant-design/icons';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboarde',
  title: 'Навигация',
  type: 'group',
  children: [
    {
      id: 'user',
      title: 'Пользователи',
      type: 'item',
      url: '/admin',
      icon: ExpandOutlined,
      breadcrumbs: false
    }
    // {
    //   id: 'access',
    //   title: 'Доступ',
    //   type: 'item',
    //   url: '/access',
    //   icon: ExpandOutlined,
    //   breadcrumbs: false
    // }
  ]
};

export default dashboard;
