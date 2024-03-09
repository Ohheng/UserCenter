import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'zhOhh出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '编程导航',
          href: 'https://ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <> <GithubOutlined/> zhOhh GitHub</>,
          href: 'https://github.com/zhOhh',
          blankTarget: true,
        },

      ]}
    />
  );
};
export default Footer;
