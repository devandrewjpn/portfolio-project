import React from 'react'
import styles from './Final.module.css'
import { useForm } from 'react-hook-form'

const Final = () => {

  const { register, handleSubmit } = useForm()

  return (
    <div className={`animLeft ${styles.wrap}`}>
      <p>ここまで読んでくれてありがとうございます！</p>
      <p>feel free to contact me!</p>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register('name', { required: true })} type='text' placeholder='name' />
        <input {...register('email', { required: true })} type='email' placeholder='e-mail' />
        <textarea {...register('message', { required: true })} placeholder='message' cols="3" rows="3"></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  )
}

export default Final