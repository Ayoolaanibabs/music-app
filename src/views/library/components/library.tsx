import { Layout } from "antd";
import LibraryHeader from "./libraryHeader";
import LibraryContent from "./content";

const { Header, Content } = Layout;

function Library(): JSX.Element {
  return (
    <Layout>
      <Header>
        <LibraryHeader />
      </Header>
      <Content>
        <LibraryContent />
      </Content>
    </Layout>
  );
}

export default Library;
