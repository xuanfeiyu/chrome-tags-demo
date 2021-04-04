import React from "react"
import * as styles from "../styles/index.module.less"
import addimg from "../../static/images/add.svg"
import iconclear from "../../static/images/icon_clear.svg"
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import * as listActions from "../store/actions/list.action"
import * as modalActions from '../store/actions/modal.action'
function TagList({list,show,del}) {
  let columnCount = list.length < 5 ? list.length+1 :list.length===5? 3:4
  let width = columnCount * 124

 function handleDelete(e,index){
    e.preventDefault()
    del({index})
  }

  return (
    <div
      className={styles.taglist}
      style={{ columnCount: columnCount, width: width }}
    >
      {list.map((item,index) => (
          <a
          tragable="true"
          key={item.webaddress}
            title={item.webname}
            className={styles.tile}
            href={item.webaddress}
          >
            <div aria-hidden className={styles.icon} onClick={(e)=>{return handleDelete(e,index)}}>
              <img src={iconclear} alt="" />
            </div>
            <div className={styles.tileicon}>
              <img src={item.webaddress+"/favicon.ico"} alt=" " />
            </div>
            <div className={styles.tiletitle}>
              <span>{item.webname}</span>
            </div>
          </a>
        ))
      }
      <button type="button" onClick={show} className={styles.addShortcut}>
        <div className={styles.tileicon}>
          <img src={addimg} alt="add" />
        </div>
        <div className={styles.tiletitle}>
          <span>添加快捷方式</span>
        </div>
      </button>
    </div>
  )
}
const mapStateToProps=state=>({
  list:state.listReducer.list
})
const mapDispatchToprops = dispatch => ({
  ...bindActionCreators(listActions, dispatch),
  ...bindActionCreators(modalActions, dispatch),
})
export default connect(mapStateToProps,mapDispatchToprops)(TagList)
