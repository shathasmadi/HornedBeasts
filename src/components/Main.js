import React from 'react';
import HornedBeast from './Hornedbeast';
class Main extends React.Component {
  render() {
    return (
      this.props.Data.map((value) => {
        return (
          <div>
            <HornedBeast
              title={value.title}
              img={value.image_url}
              keyword={value.keyword}
              description={value.description}
              horns={value.horns}
              selectedUpdate={this.props.selectedUpdate}
            />
          </div>
        )
      })
    )
  }
}
export default Main;