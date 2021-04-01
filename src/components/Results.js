import React, {Component} from 'react';

const Results = (props) => {
    const { repos } = props;
    console.log("Repos is: ", repos);

    const listRepos = 
      repos.length !== 0 ? (
        repos.data.map((item) => (
         <li key={item.id}>
             <a herf={item.html_url}>{item.name}</a>
        </li>
      ))
    ) : (
      <li>No repos found</li>
    );

    return <ul>{listRepos}</ul>;
}

export default Results;