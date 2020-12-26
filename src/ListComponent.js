import {FixedSizeGrid, FixedSizeList} from 'react-window';
import model from './model';
import React from 'react';

const items = [];

for (let i = 0; i < 100; i++) {
    items.push(model.map(m => (
        <img src={m.image} alt={m.name} width={100} height={90}/>
    )))
}

const Row = ({index, style}) => {
    let styleExt = {
        ...style,
        borderBottom: '1px solid #fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    return (
        <div style={styleExt}>
            {items[index]}
        </div>
    )
}

class ListComponent extends React.Component {
    listRef = React.createRef();

    scrollToRow = (rowNum) => () => {
        if(rowNum <= 0 || rowNum > items.length) return;
        this.listRef.current.scrollToItem(rowNum);
    }

    render() {
        return (
            <div>
                <button onClick={this.scrollToRow(50)}>跳转指定位置</button>
                <FixedSizeList ref={this.listRef}
                               height={360}
                               width={400}
                               itemSize={120}
                               itemCount={items.length}
                               className={this.props.className}
                >
                    {Row}
                </FixedSizeList>
            </div>
        );
    }
}

export default ListComponent;