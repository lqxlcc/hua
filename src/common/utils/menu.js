export const allMenu = [
  {
    name: '首页',
    url: 'index',
    icon: 'home',
  }, {
    name: '数据管理',
    url: 'dataManage',
    icon: 'global',
    children: [
        { name: '管理员列表', url: 'managerList' },
        { name: '用户列表', url: 'userList' },
        { name: '商家列表', url: 'businessList' },
        { name: '商品列表', url: 'goods' },
        { name: '订单列表', url: 'orders' }
        
    ]
  }, {
    name: '添加数据',
    url: 'addData',
    icon: 'file-add',
    children: [
      { name: '添加商铺', url: 'addShop' },
      { name: '添加商品', url: 'addGoods' }
      
    ]
  }, {
    name: '图表',
    url: 'pic',
    icon: 'pie-chart',
    children: [
      { name: '用户分布', url: 'usercover' }
     
    ],
  }, {
    name: '编辑',
    url: 'edit',
    icon: 'edit',
    children: [
      { name: '文本编辑', url: 'documentEdit' },
    ],
  }, {
    name: '设置',
    url: 'setting',
    icon: 'setting',
    children: [
      { name: '管理员设置', url: 'managerSetting' },
    ],
  }, {
    name: '说明',
    url: 'Guide',
    icon: 'exclamation-circle-o',

  }]