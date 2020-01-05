import React from 'react'


class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page-img-container">
              <img className="home-page-img" 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80">
              </img>
              <div className="home-page-img-text">
                <p>Planets</p>
              </div>
            </div>
        )
    }
}

export default HomePage