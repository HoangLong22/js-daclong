$('#example').DataTable({
    data: JSON.parse(dataJson).users,
    columns: [
        { data: 'id' },
        { data: 'name' },
        { data: function (row) {
                var positions = JSON.parse(dataJson).positions;
                var result = '<select class="form-control form-control-sm">';
                positions.forEach(function (item) {
                    if (row["position"] == item.id) {
                        result += '<option selected value="' + row["position"] + '">' + item.name + '</option>'
                    }
                    else {
                        result += '<option value="' + row["position"] + '">' + item.name + '</option>'

                    }
                });
                result += '</select >';
                return result;
            }},
        { data: function (row) {
                return '<input type="text" id="text" class="form-control form-control-sm" value="' + row["salary"] + '"/>';
        }},
        { data: function (row) {
                return '<input type="date" class="form-control form-control-sm" value="' + row["start_date"] + '"/>';
        }},
        { data: function (row) {
            var offices = JSON.parse(dataJson).offices;
            var result = '<select class="form-control form-control-sm">';
            offices.forEach(function (item) {
                if (row["office"] == item.id) {
                    result += '<option selected value="' + row["office"] + '">' + item.name + '</option>'
                    }
                    else {
                    result += '<option value="' + row["office"] + '">' + item.name + '</option>'

                    }
                });
                result += '</select >';
                return result;
            }},
        { data: function(row) {
            return '<input type="text" class="form-control form-control-sm" value="' + row["extn"] + '"/>';
        }},
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