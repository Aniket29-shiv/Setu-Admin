import * as React from 'react';
import { styled } from '@mui/material/styles';
import { isValidElement, memo } from 'react';
import clsx from 'clsx';
import { TableCell, TableSortLabel, Tooltip } from '@mui/material';
import { TableCellProps } from '@mui/material/TableCell';
import {
    FieldTitle,
    useTranslate,
    SortPayload,
    useResourceContext,
    useTranslateLabel,
} from 'ra-core';

export const DatagridHeaderCell = (
    props: DatagridHeaderCellProps
): JSX.Element => {
    const { className, field, sort, updateSort, isSorting, ...rest } = props;
    const resource = useResourceContext();

    const translate = useTranslate();
    const translateLabel = useTranslateLabel();
    const sortLabel = translate('ra.sort.sort_by', {
        field: field
            ? translateLabel({
                  label: isValidElement(field.props.label)
                      ? undefined
                      : field.props.label,
                  resource,
                  source: field.props.source,
              })
            : undefined,
        order: translate(`ra.sort.${sort?.order === 'ASC' ? 'DESC' : 'ASC'}`),
        _: translate('ra.action.sort'),
    });

    return (
        <StyledTableCell
            className={clsx(className, field?.props.headerClassName)}
            align={field?.props.textAlign || field?.type.textAlign}
            variant="head"
            {...rest}
        >
            {updateSort &&
            sort &&
            field &&
            field.props.sortable !== false &&
            field.type.sortable !== false &&
            (field.props.sortBy || field.props.source) ? (
                <Tooltip
                    title={sortLabel}
                    placement={
                        field.props.textAlign === 'right' ||
                        field.type.textAlign === 'right'
                            ? 'bottom-end'
                            : 'bottom-start'
                    }
                    enterDelay={300}
                >
                    <TableSortLabel
                        active={
                            sort.field ===
                            (field.props.sortBy || field.props.source)
                        }
                        direction={sort.order === 'ASC' ? 'asc' : 'desc'}
                        data-field={field.props.sortBy || field.props.source}
                        data-order={field.props.sortByOrder || 'ASC'}
                        onClick={updateSort}
                        classes={DatagridHeaderCellClasses}
                    >
                        <FieldTitle
                            label={field.props.label}
                            source={field.props.source}
                            resource={resource}
                        />
                    </TableSortLabel>
                </Tooltip>
            ) : (
                <FieldTitle
                    label={field?.props.label}
                    source={field?.props.source}
                    resource={resource}
                />
            )}
        </StyledTableCell>
    );
};

export interface DatagridHeaderCellProps
    extends Omit<TableCellProps, 'classes' | 'resource'> {
    className?: string;
    field?: JSX.Element;
    isSorting?: boolean;
    sort?: SortPayload;
    updateSort?: (event: any) => void;
}

export default memo(
    DatagridHeaderCell,
    (props, nextProps) =>
        props.updateSort === nextProps.updateSort &&
        props.sort?.field === nextProps.sort?.field &&
        props.sort?.order === nextProps.sort?.order &&
        props.isSorting === nextProps.isSorting
);

const PREFIX = 'RaDatagridHeaderCell';

export const DatagridHeaderCellClasses = {
    icon: `${PREFIX}-icon`,
};

// Remove the sort icons when not active
const StyledTableCell = styled(TableCell, {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})({
    [`& .MuiTableSortLabel-icon`]: {
        display: 'none',
    },
    [`& .Mui-active .MuiTableSortLabel-icon`]: {
        display: 'inline',
    },
});
