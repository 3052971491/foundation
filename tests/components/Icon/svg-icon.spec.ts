import { mount } from '@vue/test-utils';
import SvgIcon from '/@/components/Icon';

describe('SvgIcon', () => {
  it('renders correctly', () => {
    const wrapper = mount(SvgIcon, {
      props: {
        name: 'vue',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.unmount();
  });
});

// // 通过 describe 创建一个代码块
// // 把 SvgIcon 的相关测试都放到这个代码块中
// describe('my-SvgIcon', () => {
//   // 测试1：测试 SvgIcon 组件是否生成的是预期的文本框
//   test('SvgIcon-text', () => {
//     // 在内存中挂在组件，并获取返回的包裹器
//     const wrapper = mount(SvgIcon);
//     // 断言：包裹器获取的html字符串中包含指定内容
//     expect(wrapper.html()).toContain('SvgIcon type="text"');
//   });

//   // 测试2：测试密码文本框
//   test('SvgIcon-password', () => {
//     // propsData 设置组件的props属性
//     const wrapper = mount(SvgIcon, {
//       propsData: {
//         type: 'password',
//       },
//     });

//     expect(wrapper.html()).toContain('SvgIcon type="password"');
//   });

//   // 测试3：测试组件状态（value值）
//   test('SvgIcon-value', () => {
//     const wrapper = mount(SvgIcon, {
//       propsData: {
//         type: 'password',
//         value: 'admin',
//       },
//     });

//     expect(wrapper.props('value')).toBe('admin');
//   });

//   // 测试4：快照对比
//   test('SvgIcon-snapshot', () => {
//     const wrapper = mount(SvgIcon, {
//       propsData: {
//         type: 'password',
//         value: 'admin',
//       },
//     });

//     // 首次执行该测试，会在当前test.js所在目录创建 __snapshots__ 目录
//     // 目录中存放的就是快照文件 SvgIcon.test.js.snap
//     // 当前测试用例存储的快照内容是组件实例的 DOM

//     // 之后再执行该测试，就会用 expect 传入的值，对比快照文件中的内容
//     // 如果一样，测试成功，如果不一样，测试失败
//     // 可以修改 propsData 的参数查看对比结果
//     // 重新生成快照： `yarn jest -u`
//     expect(wrapper.vm.$el).toMatchSnapshot();
//   });
// });
