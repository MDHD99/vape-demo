import React from 'react'
import './index.css'

interface FilterProps {
    name: string;
    onFilterChange: any
}

const FilterBubble: React.FC<FilterProps> = ({ name, onFilterChange }) => {
    const onPress = () => {
        onFilterChange(name)
    }
    return (
        <div onClick={onPress} className='FilterBubble'>{name}</div>
    )
}

export default FilterBubble