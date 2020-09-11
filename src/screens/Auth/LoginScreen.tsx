import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { translate } from '~/locales';
import { Refresh_AUTH } from '~/redux/auth/Action';

type StoreProps = {
  Refresh_AUTH: ()=>void
}

// criar o modal abrindo quanod a mensagem nao estiver nula
type DispatchProps = {}

type Props = StoreProps & DispatchProps
const Login = (props:Props) => {
  useEffect(()=>{
    props.Refresh_AUTH()
  },[])

  return(
    <View>
      <Text>{translate('hello')}</Text>
    </View>
  )
};
const mapStoreToProps = (store: any) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({Refresh_AUTH}, dispatch);

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
