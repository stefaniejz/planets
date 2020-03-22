import React from 'react'
import { List, Card} from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

class Galleries extends React.Component {
    render() {
   
        return(
            <div className="Galleries"> {
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={this.props.detail.galleries}
                    renderItem={image => (
                    <List.Item>
                        <Card hoverable  style={{ width: 240}} cover={<img alt="example" src={image} style={{ width: 240, height: 200 }} />}></Card>
                    </List.Item>
                    )}
                />}
            </div>)
    }
}

 

export default Galleries