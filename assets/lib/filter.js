
d3.json("/assets/lib/data/person.json", function(data) {

    var columns = ["name", " ", "birthday", "phone", "personal email", "job"];

    ///////////////////////////////////////
    // HEADER ENTER

    d3.select("thead tr").selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .text(function(d) {
            return d;
        });


    ///////////////////////////////////////
    // ROW ENTER SELECTION
    var rowMapping = ["image", "name", "birthday", "phone", "email", "job"];

    function generateRows(dataset, sort) {

        // Reset Table Body
        $('tbody').empty();

        // Sort
        if (typeof sort === 'undefined') {
            dataset = dataset.sort(function(x, y) {
                return d3.ascending(x.id, y.id);
            });
        } else {
            if (sort == "job") {
                dataset = dataset.sort(function(x, y) {
                    return d3.ascending(x.job, y.job);
                })
            }
            if (sort == "email") {
                dataset = dataset.sort(function(x, y) {
                    return d3.ascending(x.email, y.email);
                })
            }
            if (sort == "name") {
                dataset = dataset.sort(function(x, y) {
                    return d3.ascending(x.name, y.name);
                })
            }
            if (sort == "bod") {
                var parseDate = d3.timeParse("%m/%d/%Y");
                dataset.forEach(function(d) {
                    d.birthday = parseDate(d.birthday);
                });

                dataset = dataset.sort(function(x, y) {
                    return d3.descending(x.birthday, y.birthday);
                })

                dataset.forEach(function(d) {
                    var format = d3.timeFormat("%m/%d/%Y");
                    d.birthday = format(d.birthday);
                });

            }
        }

        var rows = d3.select("tbody");

        for (var i = 0; i < dataset.length; i++) {

            // Generate new data
            var extract_row_data = [];
            for (var j = 0; j < rowMapping.length; j++) {
                var item = d3.map(dataset[i]).get(rowMapping[j]).toString();
                extract_row_data.push(item);
            }

            // Add new rows
            var row = rows.append("tr").style('opacity', 0.0);

            var cells_in_new_rows = row.selectAll("td").data(extract_row_data);

            cells_in_new_rows.enter()
                .append('td')
                .each(function(d, i) {
                    var cell = d3.select(this);

                    // Check if it is image
                    if (i == 0) {
                        cell.append("img")
                            .attr("src", function(d) {
                                return d;
                            });
                    } else {
                        cell.text(function(d) {
                            return d;
                        })
                    }


                });

            // Apply Transition
            row.transition()
                .duration(80)
                .delay(80 * i)
                .ease(d3.easeLinear)
                .style('opacity', 1.0);

            rows.exit().remove();

        }
    };

    // Run Function
    generateRows(data);

    ///////////////////////////////////////
    // FITLERS
    var filters = {};
    filters['job'] = ['All titles', 'Design team', 'Management team'];
    filters['bod'] = ['Show all', 'Born in 1992', 'Born in June'];
    filters['name'] = ['All staffs', 'Last name starting with M'];

    // Turn off child selection
    $('.select.child').css("display", "none");

    function showOptions(list, keys) {
        if (keys) {
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            var i;
            for (i = 0; i < keys.length; i++) {
                var option = new Option(keys[i], i);
                list.options.add(option);
            }
        }
    };

    // 
    $('select').change(function() {
        var val = $(this).find('option:selected').val();
        var text = $(this).find('option:selected').text();

        // Filter parent
        if (this.name == "parent") {
            if (val != "") {
                $('.select.child').css("display", "inline-block");
                var subFilterList = document.getElementById("sub-filter");
                var currentFilter = filters[val];
                showOptions(subFilterList, currentFilter);
                generateRows(data, val);

            } else {
                $('.select.child').css("display", "none");
                generateRows(data);
            }

        }
        // Filter child
        else {
            if (text == "All titles") {
                generateRows(data, "job");
            }
            if (text == "Show all") {
                generateRows(data, "birthday");
            }
            if (text == "All staffs") {
                generateRows(data, "name");
            } else {
                if (text == 'Design team') {
                    var newData = data.filter(function(d) {
                        return d.job.indexOf("Design") > -1 || d.job.indexOf("Art") > -1 || d.job.indexOf("Creative") > -1;
                    });
                    generateRows(newData);
                }
                if (text == 'Management team') {
                    var newData = data.filter(function(d) {
                        return d.job.indexOf("VP") > -1;
                    });
                    generateRows(newData);
                }
                if (text == 'Born in 1992') {
                    var newData = data.filter(function(d) {
                        return d.birthday.indexOf("1992") > -1;
                    });
                    generateRows(newData);
                }

                if (text == 'Last name starting with M') {
                    var newData = data.filter(function(d) {
                        return d.lastname.indexOf("M") > -1;
                    });
                    generateRows(newData);
                }

                if (text == 'Born in June') {
                    var newData = data.filter(function(d) {
                        return d.birthday.indexOf("06") > -1 && d.birthday.indexOf("/06/") == -1;
                    });
                    generateRows(newData);
                }

            }
        }
    });
});
