import React from 'react';

import { connect } from 'react-redux';

import { FetchPosts } from '../Actions/action';

class Posts extends React.Component {

  render() {
    console.log(this.props.loading);

    return (
      <div className="App" >
        <h2>THIS IS THE EXAMPLE OF REDUX THUNK</h2>
        <button onClick={() => this.props.FetchPosts()}>CLICK</button>
        <h3>{this.props.loading ? "Loading..." : null}</h3>
        <ul>
          {this.props.posts.map((post) => {
            return <li key={post.id}>{post.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    loading: state.loading
  }
}


export default connect(mapStateToProps, { FetchPosts })(Posts);
