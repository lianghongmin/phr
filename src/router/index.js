import Vue from 'vue'
import Router from 'vue-router'
import indexLine from '@/components/indexLine'
import medical from '@/components/medical'
import report from '@/components/report'
import dicom from '@/components/dicom'
import dicom_img from '@/components/dicom_img'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexLine',
      component: indexLine,
      /*meta: {
        keepAlive: true // 需要缓存
      }*/
    },
    {
      path: '/indexLine',
      name: 'indexLine',
      component: indexLine,
      /*meta: {
        keepAlive: true // 需要缓存
      }*/
    },
    {
      path: '/medical',
      name: 'medical',
      component: medical,
      
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/dicom',
      name: 'dicom',
      component: dicom,
    },
    {
      path: '/dicom_img',
      name: 'dicom_img',
      component: dicom_img
    }
  ]
})
