import SectionTitle from '../../SectionTitle/SectionTitle';
import MyClassRow from './MyClassRow';
import Swal from 'sweetalert2';
import useClasses from '../../hooks/useClasses';



const MyClass = () => {
    const [selectClasses, refetch] = useClasses();

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className='w-full bg-gray-500 px-4 pt-4 pb-20 text-white mt-5'>
            <SectionTitle subheading="Class Show Now" heading="All Select Class"></SectionTitle>

            <div className="overflow-x-auto mt-9">
                <table className="table border rounded">
                    {/* head */}
                    <thead className='text-sm text-lime-300'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            selectClasses.map((singleClass, index) => <MyClassRow
                                key={singleClass._id}
                                singleClass={singleClass}
                                handleDelete={handleDelete}
                                index={index}
                            ></MyClassRow>)
                        }
                       

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClass;