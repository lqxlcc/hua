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
        { name: '商品列表', url: 'goods' },
        { name: '订单列表', url: 'orders' }
        
    ]
  }, {
    name: '添加数据',
    url: 'addData',
    icon: 'file-add',
    children: [
      { name: '添加商品', url: window.localStorage.getItem('updatelimit')===1 ? 'addGoods' : 'guide' }
      
    ]
  }, {
    name: '搜索',
    url: 'search',
    icon: 'search',
    children: [
      { name: '搜索你所想', url: 'goSearch'}
    ]
  }, {
    name: '编辑',
    url: 'edit',
    icon: 'edit',
    children: [
      { name: '文本编辑', url: 'editor' },
    ],
  }, {
    name: '说明',
    url: 'guide',
    icon: 'exclamation-circle-o',

  }]