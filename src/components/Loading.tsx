import { Backdrop, CircularProgress } from '@mui/material';

function Loading() {
  return (
    <div className='bg-[#121212] min-h-screen'>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={true}
      >
        <CircularProgress
          sx={{
            color: '#ca8a04',
          }}
        />
      </Backdrop>
    </div>
  );
}

export default Loading;
