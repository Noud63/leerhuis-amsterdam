import React from 'react'
import { Link } from "react-router-dom";

const ActivityItemLink = ({act}) => {
  return (
    <div className="bg-gradient-to-t from-slate-950 to-slate-900/40 flex justify-center items-center h-[18%] absolute bottom-0 left-0 w-full">
              <Link
                to={
                  act.itemId === "LA-AC19"
                    ? `polarisatie`
                    : `calendaritem/${act.id}`
                }
              >
                <button
                  type="button"
                  className="flex items-center text-orange-400 font-semibold border-2 border-orange-400 rounded-full px-8 py-2"
                >
                  Lees meer
                </button>
              </Link>
            </div>
  )
}

export default ActivityItemLink