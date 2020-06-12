function studentsNeededFunc(A, B,maxPages)
{
    let students = 0;
    let pages = 0;
    let bookCount = 0;
    while (bookCount < A.length)
    {
        if (pages + A[bookCount] > maxPages)
        {
            students++;
            pages = 0;
        }
        else
        {
            pages += A[bookCount];
            bookCount++;
        }
    }
    if (pages != 0)
    {
        students++;
    }
    return students;
}
 
function books(A,  B)
{
    //each student has to be atleast allocated one book
    if (B > A.length)
        return -1;
 
    //find maximum pages. sum of all pages.
    let high = A.Sum();
    let low = A.Max();
    let maxPagesAllocated = int.MaxValue;
    while (low <= high)
    {
        let mid = (low + high) / 2;
        let studentsNeeded = studentsNeededFunc(A, B, mid);
        if (studentsNeeded > B)
            low = mid + 1;
        else
        {
            //all the students are allocated books
            high = mid - 1;
            maxPagesAllocated = Math.Min(maxPagesAllocated, mid);
        }
    }
    return maxPagesAllocated == int.MaxValue ? -1 : maxPagesAllocated;

  }
