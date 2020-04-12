import React, {Component} from 'react';
import cm from 'classnames';
import Tree from './ui/ui-tree';
import data from '../state/data';
import './react-tree.css';

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
                    <pre>{JSON.stringify(this.state.data, null, '  ')}</pre>
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
        data.children.push({ module: 'Новая ветка' });
        this.setState({
            data: data
        });
    };
}

export default ReactTree;
