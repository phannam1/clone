import React from "react"
import PersonIcon from '@material-ui/icons/Person';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
const cardHeader = () => {
    return (

        <div className='max-w-md md:max-w-xs rounded-xl shadow-lg h-96 flex mt-4'>
            <div className='table-row '>
                <div className='h-2/4 '>
                    <img className='w-full h-48 object-cover  md:w-80' src='/images/img1.jpg' alt='image' />
                </div>
                <div className='my-4 h-2/4 '>
                    <a href='#' className='text-lg font-bold overflow-hidden p-2 w-full h-1/3 flex '>
                        Núi Phú Sĩ: Địa điểm tâm linh, biểu tượng văn hóa và kỳ quan địa lý Núi Phú Sĩ: Địa điểm tâm linh, biểu tượng văn hóa và kỳ quan địa lý
                    </a>
                    <div className='h-1/6 flex justify-between'>
                        <p className='text-gray-400 pt-1'><PersonIcon className='text-blue-900 mx-1 flex justify-center mb-1' fontSize='inherit' />Admin</p>
                        <p className='text-gray-400 pt-1 mr-1'><QueryBuilderIcon className='text-blue-900 mx-1 flex justify-center mb-1' fontSize='inherit' />23 giờ trước</p>
                    </div>
                    <a href='#' className='h-2/5 overflow-hidden flex mb-1 p-1'>Sừng sững ở độ cao 3.776 mét, Núi Phú Sĩ  là đỉnh núi cao nhất ở Nhật Bản, kết quả của hoạt động núi lửa đã bắt đầu từ khoảng 100.000 năm trước. Ngày nay, Núi Phú Sĩ và khu vực xung quanh là một điểm đến giải trí phổ biến cho hoạt động đi bộ đường dài, cắm trại và thư giãn.</a>
                </div>
            </div>
        </div>

    )
}
export default cardHeader