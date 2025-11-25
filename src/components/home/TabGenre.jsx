import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';



let tabIndex = 0;

const App = () => {
 
  const [size, setSize] = useState('small');
  const [activeKey, setActiveKey] = useState('1');
  // Menghapus anotasi tipe '<TabsProps['items']>' dari state 'items'
  const [items, setItems] = useState([
    {
      label: 'Tab 1',
      key: '1',
      children: 'Content of editable tab 1',
    },
    {
      label: 'Tab 2',
      key: '2',
      children: 'Content of editable tab 2',
    },
    {
      label: 'Tab 3',
      key: '3',
      children: 'Content of editable tab 3',
    },
  ]);

  const add = () => {
    // Gunakan tabIndex untuk memastikan kunci yang unik, terutama setelah tab dihapus
    const newKey = String(items.length + 1 + tabIndex++);
    setItems([
      ...items,
      {
        label: `Tab ${newKey}`,
        key: newKey,
        children: `Content of editable tab ${newKey}`,
      },
    ]);
    setActiveKey(newKey);
  };

  // Menghapus anotasi tipe ': TargetKey'
  const remove = (targetKey) => {
    if (!items) {
      return;
    }
    const targetIndex = items.findIndex((item) => item.key === targetKey);
    const newItems = items.filter((item) => item.key !== targetKey);

    if (newItems.length && targetKey === activeKey) {
      // Menghitung kunci aktif baru setelah penghapusan
      const newActiveKey =
        newItems[targetIndex === newItems.length ? targetIndex - 1 : targetIndex].key;
      setActiveKey(newActiveKey);
    }

    setItems(newItems);
  };

  // Menghapus anotasi tipe untuk parameter (targetKey, action)
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  // Menghapus anotasi tipe ': RadioChangeEvent'
  const onChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Kontrol Ukuran (Size Control) */}
      <Radio.Group value={size} onChange={onChange} style={{ marginBottom: 16 }}>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      
    
      {/* Tabs Tipe Card */}
      <h2>Card Tabs</h2>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        style={{ marginBottom: 32 }}
        items={Array.from({ length: 3 }).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Card Tab ${id}`,
            key: id,
            children: `Content of card tab ${id}`,
          };
        })}
      />
          </div>
  );
};

export default App;