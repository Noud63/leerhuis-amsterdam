import React from 'react'

const categoryTitles = {
  cursus: "Cursus",
  lezing: "Lezing",
  gesprek: "Gesprek",
  voorstelling: "Voorstelling"
}

const ActivityCategory = ({cat}) => {
  return (
    <div className="w-full flex justify-center text-white rounded-t-xl bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 p-1">
      {categoryTitles[cat] || ""}
    </div>
  )
}

export default ActivityCategory