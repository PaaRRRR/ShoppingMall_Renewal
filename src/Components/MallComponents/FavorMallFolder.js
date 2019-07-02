import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  Alert,
  FlatList,
  ActivityIndicator
} from 'react-native'

import ColorText from '../ColorText'


import BeginnerModal from '../BeginnerModal'
import CreatingFolderModal from '../CreatingFolderModal'
import ListItem4FavFolder from '../ListItem4FavFolder'

const FavorMallFolder = ({
  FavorMallFolderBtn,
  allProps,
  myFolders,
  count,
  toggleModal,
  startMakingFolder,
  createFolder,
  handleTextChange,
  toggleLikes,
  toggleAllMalls,
  removeFolder }) => (
    <View style={styles.container}>

      <View style={styles.wrapcontentbox}>


      {myFolders.map((cur,index) => (
        <ListItem4FavFolder
          allProps={cur}
          key={index}
          onPress={()=> FavorMallFolderBtn("Third", { givenData: cur })}
          onLongPress={()=> removeFolder(cur.name)}
          logo={require('../../../imgs/group-2.png')}
        />))}


      <TouchableOpacity onPress={()=> toggleModal("modalVisible")}>
        <View style={styles.shadowboxstyle}>
          <Image
            source={require('../../../imgs/group-6.png')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <BeginnerModal modalVisible={allProps.beginnerModalVisible} toggleModal={()=> toggleModal("beginnerModalVisible")}/>


      <CreatingFolderModal
        malls={allProps.malls}
        modalVisible={allProps.modalVisible}
        toggleModal={()=> toggleModal("modalVisible")}
        isSecond={allProps.isSecond}
        isChecked={allProps.isChecked}
        startMakingFolder={startMakingFolder}
        createFolder={createFolder}
        count={count}
        folderName={allProps.folderName}
        handleTextChange={handleTextChange}
        toggleLikes={toggleLikes}
        toggleAllMalls={toggleAllMalls}
      />

      </View>

    </View>

)


export default FavorMallFolder;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  wrapcontentbox: {
    flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'
  },
  shadowboxstyle: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 2,
    shadowRadius: 5, shadowOffset: {width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.8, elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1, width: 50, height: 77, resizeMode: 'contain'
  }
})
