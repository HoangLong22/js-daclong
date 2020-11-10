$('#example').DataTable({
    data: JSON.parse(dataJson).users,
    columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'position' },
        { data: 'salary' },
        { data: 'start_date' },
        { data: 'office' },
        { data: 'extn' },
        { data: "", "data": null }
    ],
    columnDefs: [
        {
            targets: -1,
            data: null,
            defaultContent: '<div class="btn-group"><button type="button" class="btn btn-danger"><span><i class="fa fa-trash-alt"></i> Delete</span></button></div>'
        },
    ],
});
