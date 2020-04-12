import React, {Component} from 'react';
import cm from 'classnames';
import Tree from './ui/ui-tree';
import data from '../../store/state/data';
import './react-tree.css';
import {connect} from 'react-redux'
import {getTreeData} from "../../store/actions/actions";

class ReactTree extends  Component{
    state = {
        active: null,
        data: data
    };

    renderNode = node => {
        return (
            <span
                className={cm('node', {
                    'is-active': node === this.state.active
                })}
                onClick={this.onClickNode.bind(null, node)}
            >
        {node.module}
      </span>
        );
    };

    onClickNode = node => {
        this.setState({
            active: node
        });
    };

    componentDidMount() {
        this.props.getTreeData();
    }

    render() {
        return (
            <div className="App">
                <div className="tree">
                    <Tree
                        paddingLeft={20}
                        data={this.state.data}
                        onChange={this.handleChange}
                        isNodeCollapsed={this.isNodeCollapsed}
                        renderNode={this.renderNode}
                    />
                </div>
                <div className="inspector">
                    <h1>
                        Исходный JSON
                    </h1>
                    <button onClick={this.updateTree}>Добавить ветку</button>
                    <button onClick={() => this.deleteTree(15)}>Удалить ветку</button>
                    <pre>{JSON.stringify(this.props.data, null, '  ')}</pre>
                </div>
            </div>
        );
    }

    handleChange = tree => {
        this.setState({
            data: data
        });
    };

    updateTree = () => {
        const { data } = this.state;
        // console.log(data.children[0].children);
        data.children.push({ module: 'Новая ветка' });
        data.children[0].children.push({ module: 'Новая ветка' });

        this.setState({
            data: data
        });
    };

    deleteTree = (idVal) => {
        const { data } = this.state;
        console.log(data);
        return
        // let filteredArray = data.filter(item => item !== idVal)

        // noinspection UnreachableCodeJS
        // eslint-disable-next-line no-unreachable
        this.setState({
            data: data
        });
    };
}

function mapStateToProps(state) {
    return {
        data: state.TreeReducer.TreeArrRedux,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTreeData: () => dispatch(getTreeData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactTree);


